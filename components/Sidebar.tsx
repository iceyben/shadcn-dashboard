import React from "react";
import { UserItem } from "./UserItem";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export const Sidebar = () => {

  const menuList = [
    {
      Group: "General",
      items: [
       {
       
        items: [
          {
            link: "/",
            text: "Profile",
          },
          {
            link: "/",
            text: "Inbox",
          },
          {
            link: "/",
            text: "Billing",
          },
          {
            link: "/",
            text: "Notifications",
          },
        ]
       }
      ],
    },
     {
      Group: "Settings",
      items: [
       {
        
        items: [
          {
            link: "/",
            text: "General Settings",
          },
          {
            link: "/",
            text: "Privacy",
          },
         
          {
            link: "/",
            text: "Logs",
          }
        ]
       }
      ],
    }
  ]
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notification</div>
    </div>
  );
};
