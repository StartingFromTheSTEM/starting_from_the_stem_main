
import {prisma} from "@/prisma/lib/prisma"



export default async function Home(){

    const user = await prisma.user.findFirst({
        where:{
            email : "test@test.com"
        }
    })
    return 
    <main>
        hello{user?.name}
    </main>
}