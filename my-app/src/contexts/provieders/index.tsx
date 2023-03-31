import { IProvidersPropps } from "../../interfaces";
import { ClientProvider } from "../client.context";

const Providers = ({ children }: IProvidersPropps) => {
  return <ClientProvider>{children}</ClientProvider>;
};
export default Providers;
