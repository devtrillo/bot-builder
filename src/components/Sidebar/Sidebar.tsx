import cx from "classnames";
import { motion } from "framer-motion";
import { ComponentProps, FC, ReactNode, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

import { Tooltip } from "@/components/Tooltip";
import useToggle from "@/hooks/useToggle";

export type SidebarItem = {
  icon: FC<ComponentProps<"svg">>;
  title: string;
} & (
  | {
      group: true;
      items: {
        title: string;
        href: string;
        label?: string;
      }[];
    }
  | {
      group: false;
      href: string;
      label?: string;
    }
);

export type SidebarProps = {
  itemsGroups: SidebarItem[][];
};

const ItemWrapper = ({
  title,
  children,
  collapsed,
}: {
  title: string;
  children: ReactNode;
  collapsed: boolean;
}) =>
  collapsed ? (
    <Tooltip content={title} placement="right">
      {children}
    </Tooltip>
  ) : (
    <>{children}</>
  );

export const Sidebar: FC<SidebarProps> = ({ itemsGroups }) => {
  const [collapsed, switchCollapsed] = useToggle(true);
  const { pathname } = useLocation();

  const [groupsState, setGroupsState] = useState<Record<number, boolean>>({});
  const toggleGroup = (index: number) => () => {
    setGroupsState((state) => ({ ...state, [index]: !state[index] }));
  };

  return (
    <motion.aside
      animate={{ width: collapsed ? "4rem" : "16rem" }}
      aria-label="sidebar"
      className="h-full transition-all"
      initial={false}
    >
      <div className="h-full overflow-y-auto border-r border-gray-200 bg-white py-4 px-3 dark:border-gray-700 dark:bg-gray-800">
        <button
          className="group flex w-full items-start rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          onClick={switchCollapsed}
        >
          <div className="group-hover:text-black dark:group-hover:text-white">
            <motion.div
              animate={{ rotateY: collapsed ? 0 : 180 }}
              className="flex h-6 w-6 items-center justify-center text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            >
              <AiOutlineArrowRight />
            </motion.div>
          </div>
          <motion.span
            animate={{ width: collapsed ? "0" : "auto" }}
            className="ml-3 overflow-hidden whitespace-nowrap"
          >
            Close sidebar
          </motion.span>
        </button>
        {itemsGroups.map((items, groupIndex) => (
          <ul
            key={groupIndex}
            className={cx("space-y-2", {
              "mt-4 border-t border-gray-200 pt-4 dark:border-gray-700":
                groupIndex > 0,
            })}
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {!item.group ? (
                  <ItemWrapper collapsed={collapsed} title={item.title}>
                    <Link
                      className={cx(
                        "group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                        {
                          "bg-gray-100 dark:bg-gray-700":
                            item.href === pathname,
                        }
                      )}
                      to={item.href}
                    >
                      <div className="group-hover:text-black dark:group-hover:text-white">
                        <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      </div>
                      <motion.span
                        animate={{ width: collapsed ? "0" : "auto" }}
                        className="ml-3 flex-1 overflow-hidden whitespace-nowrap"
                      >
                        {item.title}
                      </motion.span>

                      {item.label ? (
                        <motion.span
                          animate={{ width: collapsed ? "0" : "auto" }}
                          className="ml-3 inline-flex h-3 w-3 items-center justify-center overflow-hidden rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {item.label}
                        </motion.span>
                      ) : null}
                    </Link>
                  </ItemWrapper>
                ) : (
                  <>
                    <ItemWrapper collapsed={collapsed} title={item.title}>
                      <button
                        className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        type="button"
                        onClick={toggleGroup(groupIndex)}
                      >
                        <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        <motion.div
                          animate={{
                            overflow: "hidden",
                            width: collapsed ? "0" : "auto",
                          }}
                        >
                          <span className="ml-3 flex-1 whitespace-nowrap text-left">
                            {item.title}
                          </span>
                          <HiChevronDown className="h-6 w-6" />
                        </motion.div>
                      </button>
                    </ItemWrapper>
                    <ul
                      className={cx("space-y-2 py-2", {
                        hidden: !groupsState[groupIndex],
                      })}
                    >
                      {item.items.map((subItem, subItemIndex) => (
                        <li key={subItemIndex}>
                          <ItemWrapper
                            collapsed={collapsed}
                            title={subItem.title}
                          >
                            <Link
                              className={cx(
                                "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                {
                                  "bg-gray-100 dark:bg-gray-700":
                                    subItem.href === pathname,
                                  "pl-11": !collapsed,
                                }
                              )}
                              to={subItem.href}
                            >
                              <span
                                className={cx("flex-1 whitespace-nowrap", {
                                  "text-center": collapsed,
                                  "text-left": !collapsed,
                                })}
                              >
                                {!collapsed ? subItem.title : subItem.title[0]}
                              </span>
                              {!collapsed && subItem.label && (
                                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                  {subItem.label}
                                </span>
                              )}
                            </Link>
                          </ItemWrapper>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.aside>
  );
};
