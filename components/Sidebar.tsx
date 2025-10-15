import React from "react";
import { UserItem } from "./UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
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
      ],
    },
    {
      group: "Settings",
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
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu) => (
              <React.Fragment key={menu.group}>
                <CommandGroup heading={menu.group}>
                  {menu.items.map((item) => (
                    <CommandItem key={item.text}>{item.text}</CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notification</div>
    </div>
  );
};
