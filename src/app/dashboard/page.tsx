import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'

export default async function Dashboard() {

    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
        return <div>You are not signed in</div>
    }

    return (
        <div className="mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded">
            <h1 className='text-2xl font-bold'>Welcome</h1>
            <ul className="list-none mt-10">
                <li className="mb-2">
                    <span className="font-semibold">Email:</span>
                    <span className="font-semibold">{user?.emailAddresses[0].emailAddress}</span>
                </li>
            </ul>
        </div>
    )
}