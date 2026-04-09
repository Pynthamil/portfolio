"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { CircleArrowUp } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

export default function ContactPage() {
  return (
    <main className="page-wrapper min-h-screen flex flex-col items-center">

      <div className="w-full max-w-[600px] mt-48 relative">
        {/* Overlapping Memoji */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/Me.svg"
              alt="Memoji"
              width={200}
              height={150}
              priority
              className="drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Main Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-card w-full bg-gray-50 rounded-[40px] top-35 relative pt-32 pb-16 px-12 min-h-[400px] shadow-sm border border-black/5 flex flex-col items-center text-center"
        >
          {/* Dialogue Box Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-10"
          >
            <Image
              src="/assets/dialogue-box.svg"
              alt="Dialogue"
              width={450}
              height={100}
              className="relative top-15"
            />
          </motion.div>


          <div className="w-full max-w-[450px] border-none relative top-20">
            <input type="text" placeholder="type your message" className="w-full h-14 bg-white rounded-full p-20 text-lg outline-none" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <CircleArrowUp className="w-10 h-10" />
            </button>
          </div>

          <div className="mt-24 w-[460px]  bg-white border-neutral-200 border-2 p-5 rounded-lg relative top-30 flex gap-5">
            <Image src="/assets/Messages.svg" alt="Messages" width={80} height={80} priority className="drop-shadow-xl" />
            <Image src="/assets/Mail.svg" alt="Mail" width={80} height={80} priority className="drop-shadow-xl" />
            <Image src="/assets/Github.svg" alt="Github" width={67} height={67} priority className="drop-shadow-xl" />
            <Image src="/assets/Terminal.svg" alt="Terminal" width={80} height={80} priority className="drop-shadow-xl" />
            <Image src="/assets/Linkedin.svg" alt="Linkedin" width={65} height={65} priority className="drop-shadow-xl" />  
          </div>
        </motion.div>
      </div>
    </main>
  );
}