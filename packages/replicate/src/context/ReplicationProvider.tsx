import * as React from "react";

interface ReplicationContextType {}

const ReplicationContext = React.createContext<ReplicationContextType | null>(
  null
);

const ReplicationProvider = ({ children }: { children?: React.ReactNode }) => {
  const value = React.useMemo(() => ({}), []);
  return <ReplicationContext value={value}>{children}</ReplicationContext>;
};

export default ReplicationProvider;
