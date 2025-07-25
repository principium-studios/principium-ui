import {siteConfig} from '@/config/site';
import {FileCssIcon, FileTsxIcon, PackageIcon} from '@phosphor-icons/react/dist/ssr';
import {Button} from '@principium/react';
import Link from 'next/link';

interface ComponentLinksProps {
  name: string;
  isUtility?: boolean;
}

const ComponentLinks = ({name, isUtility}: ComponentLinksProps) => {
  const fileName = name.toLowerCase();

  const npmSource = `https://www.npmjs.com/package/@principium/${fileName}`;
  const stylesSource =
    siteConfig.links.github +
    `/blob/main/packages/core/theme/src/components/${fileName}Variants.ts`;
  const source =
    siteConfig.links.github +
    (isUtility
      ? `/blob/main/packages/components/utils/${fileName}`
      : `/blob/main/packages/components/${fileName}`);

  return (
    <div className="not-prose mb-4 flex gap-2">
      <Button asChild>
        <Link href={npmSource} target="_blank">
          <PackageIcon size={16} /> @principium/{fileName}
        </Link>
      </Button>
      {!isUtility && (
        <Button asChild>
          <Link href={stylesSource} target="_blank">
            <FileCssIcon size={16} />
            Styles Source
          </Link>
        </Button>
      )}
      <Button asChild>
        <Link href={source} target="_blank">
          <FileTsxIcon size={16} /> Source
        </Link>
      </Button>
    </div>
  );
};

export default ComponentLinks;
