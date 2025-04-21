
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authOptions";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {/* {session === "loading" && <p>Loading...</p>} */}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Page;
