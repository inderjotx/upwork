import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image";



const rows = [
  ['Solutions', 'Marketing', 'Analytics', 'Commerce', 'Insights'],
  ['Support', 'Pricing', 'Documentation', 'Guides', 'API Status'],
  ['Company', 'About', 'Blog', 'Jobs', 'Press', 'Partners'],
  ['Legal', 'Claim', 'Privacy', 'Terms']
]



const habbitRows = [
  ['PRODUCT', 'iOS App', 'Android App', 'Web App', 'Pricing', 'Updates'],
  ['RESOURCES', '50 Productivity Hacks', 'Books Calculator', 'Gamify List', 'Language Workbooks', 'ShipFast', 'Indie Page', 'MakeLanding', 'Blog'],
  ['SOCIAL', 'Twitter', 'Facebook'],
  ['LEGAL', 'Terms of use', 'Privacy policy']
];


export default function Home() {
  return (

    <div className="flex flex-col   items-center justify-center">

      <div className="flex flex-col items-center w-full px-8">
        <h1 className="w-full text-center my-10">Tailwind Footer</h1>

        <div className="grid grid-cols-6  border  rounded-md w-full  mb-10 gap-8 p-8 pb-2 " >

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




      <div className="flex flex-col items-center w-full md:px-36 px-4 mb-10 rounded-md">
        <h1 className="w-full text-center my-10 text-black">Habbit Garden</h1>


        <div className="grid grid-cols-2 gap-4 w-full bg-zinc-900 p-8 rounded-md " >

          <div className="col-span-2" >
            <Separator className="bg-muted-foreground" />
          </div>

          <div className=" col-span-2 md:col-span-1 flex">

            <div className="flex flex-col gap-2 w-1/2  ">

              {
                habbitRows[0].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:my-4 first:text-white first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}

            </div>

            <div className="flex flex-col gap-2 w-1/2">

              {
                habbitRows[1].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:my-4 first:text-white first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}
            </div>



          </div>


          <div className="col-span-2  md:col-span-1   flex ">

            <div className="flex flex-col gap-2 w-1/2">

              <div className="text-muted-foreground first:my-4 first:text-white first:font-medium text-sm">
                SOCIAL
              </div>

              <div className="text-muted-foreground first:my-4 flex gap-2  first:font-medium text-sm">
                <Twitter /> <Facebook />
              </div>

            </div>

            <div className="flex flex-col gap-2 w-1/2">

              {
                habbitRows[3].map((item, index) => {

                  return (
                    <div key={index} className="text-muted-foreground first:my-4 first:text-white first:font-medium text-sm">
                      {item}
                    </div>
                  )
                }

                )}
            </div>



          </div>



          <div className="col-span-2 text-center text-muted-foreground text-sm mt-10"  >
            <p>“Habits are the compound interest of self-improvement”
            </p>
            <p>Built with love by Inderjot Singh</p>
          </div>

        </div>



      </div>


    </div >
  );
}
