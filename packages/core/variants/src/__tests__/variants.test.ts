import { describe, test, expect } from 'vitest';
import { pv } from '../variants';

describe("Principium Variants (PV)", () => {
  test("should work with single slot variants", () => {
    const button = pv("btn", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
          lg: "text-lg"
        }
      }
    });

    expect(button()).toBe("btn");
    expect(button({ size: "sm" })).toBe("btn text-sm");
    expect(button({ size: "lg" })).toBe("btn text-lg");
  });

  test("should work with multi-slot variants", () => {
    const { header, body, footer } = pv({
      header: "card-header",
      body: "card-body",
      footer: "card-footer"
    }, {
      variants: {
        size: {
          sm: {
            header: "text-sm",
            body: "p-2",
            footer: "text-xs"
          },
          lg: {
            header: "text-lg",
            body: "p-4",
            footer: "text-sm"
          }
        }
      }
    });

    // Test default state
    expect(header()).toBe("card-header");
    expect(body()).toBe("card-body");
    expect(footer()).toBe("card-footer");

    // Test with variants
    expect(header({ size: "sm" })).toBe("card-header text-sm");
    expect(body({ size: "sm" })).toBe("card-body p-2");
    expect(footer({ size: "sm" })).toBe("card-footer text-xs");

    // Test with different variant
    expect(header({ size: "lg" })).toBe("card-header text-lg");
    expect(body({ size: "lg" })).toBe("card-body p-4");
    expect(footer({ size: "lg" })).toBe("card-footer text-sm");
  });

  test("should handle default variants", () => {
    const { header, body } = pv({
      header: "card-header",
      body: "card-body"
    }, {
      variants: {
        size: {
          sm: {
            header: "text-sm",
            body: "p-2"
          },
          lg: {
            header: "text-lg",
            body: "p-4"
          }
        },
        color: {
          primary: {
            header: "bg-blue-500",
            body: "bg-blue-100"
          },
          secondary: {
            header: "bg-gray-500",
            body: "bg-gray-100"
          }
        }
      },
      defaultVariants: {
        size: "sm",
        color: "primary"
      }
    });

    // Test with default variants
    expect(header()).toBe("card-header text-sm bg-blue-500");
    expect(body()).toBe("card-body p-2 bg-blue-100");

    // Test overriding one variant
    expect(header({ size: "lg" })).toBe("card-header text-lg bg-blue-500");
    expect(body({ size: "lg" })).toBe("card-body p-4 bg-blue-100");

    // Test overriding multiple variants
    expect(header({ size: "lg", color: "secondary" })).toBe("card-header text-lg bg-gray-500");
    expect(body({ size: "lg", color: "secondary" })).toBe("card-body p-4 bg-gray-100");
  });

  test("should handle compound variants", () => {
    const { header, body } = pv({
      header: "card-header",
      body: "card-body"
    }, {
      variants: {
        size: {
          sm: {
            header: "text-sm",
            body: "p-2"
          },
          lg: {
            header: "text-lg",
            body: "p-4"
          }
        },
        color: {
          primary: {
            header: "bg-blue-100",
            body: "bg-blue-50"
          },
          danger: {
            header: "bg-red-100",
            body: "bg-red-50"
          }
        }
      },
      compoundVariants: [
        {
          size: "lg",
          color: "danger",
          className: {
            header: "font-bold border-b border-red-200",
            body: "border-t border-red-100"
          }
        }
      ]
    });

    // Test normal variants
    expect(header({ size: "sm", color: "primary" }))
      .toBe("card-header text-sm bg-blue-100");
    expect(body({ size: "sm", color: "primary" }))
      .toBe("card-body p-2 bg-blue-50");

    // Test compound variant activation
    expect(header({ size: "lg", color: "danger" }))
      .toBe("card-header text-lg bg-red-100 font-bold border-b border-red-200");
    expect(body({ size: "lg", color: "danger" }))
      .toBe("card-body p-4 bg-red-50 border-t border-red-100");
  });

  test("should handle multiple compound variants", () => {
    const { header, body } = pv({
      header: "card-header",
      body: "card-body"
    }, {
      variants: {
        size: {
          sm: {
            header: "text-sm",
            body: "p-2"
          },
          lg: {
            header: "text-lg",
            body: "p-4"
          }
        },
        color: {
          primary: {
            header: "bg-blue-100",
            body: "bg-blue-50"
          },
          danger: {
            header: "bg-red-100",
            body: "bg-red-50"
          }
        },
        bordered: {
          true: {
            header: "border",
            body: "border"
          }
        }
      },
      compoundVariants: [
        {
          size: "lg",
          color: "danger",
          className: {
            header: "font-bold",
            body: "font-medium"
          }
        },
        {
          color: "danger",
          bordered: true,
          className: {
            header: "border-red-200",
            body: "border-red-100"
          }
        }
      ]
    });

    // Test multiple compounds activating together
    expect(header({ size: "lg", color: "danger", bordered: true }))
      .toBe("card-header text-lg bg-red-100 border font-bold border-red-200");
    expect(body({ size: "lg", color: "danger", bordered: true }))
      .toBe("card-body p-4 bg-red-50 border font-medium border-red-100");
  });

  test("should throw error on invalid variant name", () => {
    const { header } = pv({
      header: "card-header"
    }, {
      variants: {
        size: {
          sm: "text-sm",
          lg: "text-lg"
        }
      }
    });

    expect(() => header({ invalid: "value" } as any))
      .toThrow("Invalid variant name: invalid");
  });

  test("should throw error on invalid variant value", () => {
    const { header } = pv({
      header: "card-header"
    }, {
      variants: {
        size: {
          sm: "text-sm",
          lg: "text-lg"
        }
      }
    });

    expect(() => header({ size: "invalid" } as any))
      .toThrow('Invalid value "invalid" for variant "size"');
  });

  test("should handle boolean variants", () => {
    const { header, body } = pv({
      header: "card-header",
      body: "card-body"
    }, {
      variants: {
        disabled: {
          true: {
            header: "opacity-50 cursor-not-allowed",
            body: "opacity-50"
          },
          false: {
            header: "cursor-pointer",
            body: "opacity-100"
          }
        }
      },
      defaultVariants: {
        disabled: false
      }
    });

    // Test default state (false)
    expect(header()).toBe("card-header cursor-pointer");
    expect(body()).toBe("card-body opacity-100");

    // Test explicit true state
    expect(header({ disabled: true })).toBe("card-header opacity-50 cursor-not-allowed");
    expect(body({ disabled: true })).toBe("card-body opacity-50");

    // Test explicit false state
    expect(header({ disabled: false })).toBe("card-header cursor-pointer");
    expect(body({ disabled: false })).toBe("card-body opacity-100");
  });
}); 