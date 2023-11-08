import Navbar from "./navbar";

export default async function Nav() {
  // const session = await auth(); TODO: replace with real backend
  // return <Navbar user={session?.user} />;
  return <Navbar user={null}/>;
}
