import { Variants, motion } from "framer-motion";
interface propsTypes {
  toggle: () => void;
}

const Path = (props: {
  d?: string;
  variants: Variants;
  transition?: {
    duration: number;
  };
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0,0%,18%)"
    strokeLinecap="round"
    {...props}
  />
);
export const MenuToggle = ({ toggle }: propsTypes) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute left-[29px] top-[18px] h-[50px] w-[50px] cursor-pointer select-none rounded-full border-none bg-transparent outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: {
            d: "M 2,2.5 L 20,2.5",
          },
          open: {
            d: "M 3,16.5 L 17,2.5",
          },
        }}
      />
      <Path
        d="M 2,9.423 L 20,9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2,16.346 L 20,16.346" },
          open: { d: "M 3,2.5 L 17,16.346" },
        }}
      />
    </svg>
  </button>
);
