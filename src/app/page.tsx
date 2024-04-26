import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image";



const rows = [
  ['Solutions', 'Marketing', 'Analytics', 'Commerce', 'Insights'],
  ['Support', 'Pricing', 'Documentation', 'Guides', 'API Status'],
  ['Company', 'About', 'Blog', 'Jobs', 'Press', 'Partners'],
  ['Legal', 'Claim', 'Privacy', 'Terms']
]



export default function Home() {
  return (

    <div className="flex flex-col   items-center justify-center">

      <div className="flex flex-col items-center w-full px-8">
        <h1 className="w-full text-center my-10">Tailwind Footer</h1>

        <div className="grid grid-cols-6  border  rounded-md w-full  mb-20 gap-8 p-8 " >

          <div className="lg:col-span-2 col-span-6 flex flex-col justify-center gap-4 items-start" >

            <div>
              <Image src={'/tailwindcss.svg'} alt="logo" height={30} width={30} />
            </div>
            <div className="flex flex-wrap text-sm text-muted-foreground">
              Making the world a better place through constructing elegant hierarchies.
            </div>
            <div className="flex gap-4 text-muted-foreground flex-wrap " >
              <Facebook className="hover:text-foreground w-5 h-5" />
              <Instagram className="hover:text-foreground w-5 h-5" />
              <Twitter className="hover:text-foreground w-5 h-5" />
              <Github className="hover:text-foreground w-5 h-5" />
              <Youtube className="hover:text-foreground w-5 h-5" />
            </div>




          </div>


          <div className="col-span-6 lg:col-span-2 md:col-span-3 flex">

            <div className="flex flex-col gap-4 w-1/2  ">

              {
                rows[0].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:text-foreground first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}

            </div>

            <div className="flex flex-col gap-4 w-1/2">

              {
                rows[1].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:text-foreground first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}
            </div>



          </div>


          <div className="col-span-6 lg:col-span-2 md:col-span-3 flex ">

            <div className="flex flex-col gap-4 w-1/2">

              {
                rows[2].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:text-foreground first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}

            </div>

            <div className="flex flex-col gap-4 w-1/2">

              {
                rows[3].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:text-foreground first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}
            </div>



          </div>


          <div className="col-span-6 flex flex-col w-full mt-10" >
            <Separator />

            <p className="my-2 text-muted-foreground text-xs " >© 2020 Your Company, Inc. All rights reserved.</p>
          </div>


        </div>
      </div>

    </div >
  );
}
