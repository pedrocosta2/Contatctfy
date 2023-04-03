import { IProvidersPropps } from "../../interfaces";
import { ClientProvider } from "../client.context";
import { ContactProvider } from "../contact.context";
const Providers = ({ children }: IProvidersPropps) => {
  return (
    <ClientProvider>
      <ContactProvider>{children}</ContactProvider>
    </ClientProvider>
  );
};
export default Providers;
