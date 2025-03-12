import { Card, SmallCard } from "../../../components";
import { ComponentCardData } from "../../type/Types";

export const CARD_COMPONENT: ComponentCardData = {
  id: 4,
  title: "Card Component",
  description:
    "A sleek and versatile card layout for displaying images, text, and actions. Ideal for product showcases, feature highlights, and content organization.",
  demoComponent: <SmallCard />,
  componentPageTitle: "Card Component",
  componentPageDescription:
    "An adaptable and stylish card component designed to present information in a visually appealing way. It supports customizable layouts, image integration, action buttons, and flexible content arrangements. Ideal for dashboards, product displays, and information sections.",
  fileName: "Card.tsx",
  configBaseCode: `interface CardProps {
  cn?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({ cn, children, ariaLabel }) => {
  return (
    <div className={\`rounded-lg shadow-md p-4 \${cn}\`} aria-label={ariaLabel}>
      {children}
    </div>
  );
};
`,
  variations: [
    {
      id: 1,
      title: "Basic Card",
      description: "A simple card with padding and a shadow effect.",
      component: (
        <Card cn="p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
          <div className="border-b border-neutral-400 pb-1">
            <h3 className="text-lg font-semibold">Card Title</h3>
          </div>
          <div>
            <p className="text-sm">This is a basic card layout.</p>
          </div>
        </Card>
      ),
      code: `<Card cn="p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
  <div className="border-b border-neutral-400 pb-1">
    <h3 className="text-lg font-semibold">Card Title</h3>
  </div>
  <div>
    <p className="text-sm">This is a basic card layout.</p>
  </div>
</Card>`,
    },
    {
      id: 2,
      title: "Card with Image",
      description: "A card featuring an image at the top.",
      component: (
        <Card
          cn="p-4 shadow-md bg-[#63636365] rounded-lg flex flex-col gap-4 text-white"
          ariaLabel="card with image and description"
        >
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Card Image"
              className="w-full max-h-40 object-cover rounded-lg"
            />
          </div>
          <div className="border-b border-neutral-600 pb-1">
            <h3 className="text-lg font-semibold">Card Title</h3>
          </div>
          <div>
            <p className="text-sm">This is a card with image.</p>
          </div>
        </Card>
      ),
      code: `<Card cn="p-4 shadow-md bg-[#63636365] rounded-lg flex flex-col gap-4 text-white" ariaLabel="card with image and description">
  <div>
    <img
      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
      alt="Card Image"
      className="rounded-lg w-full sm:w-[20vw]"
    />
  </div>
  <div className="border-b border-neutral-600 pb-1">
    <h3 className="text-lg font-semibold">Card Title</h3>
  </div>
  <div>
    <p className="text-sm">This is a card with image.</p>
  </div>
</Card>`,
    },
    {
      id: 3,
      title: "Card with Actions",
      description: "A card that includes action buttons.",
      component: (
        <Card cn="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
          <div className="border-b border-neutral-600 pb-1">
            <h3 className="text-lg font-semibold">Interactive Cards</h3>
          </div>
          <div>
            <p className="text-sm">Buttons to show interactivity.</p>
          </div>
          <div className="flex gap-2 items-center">
            <button className="p-2 bg-green-600 text-white rounded-md text-xs active:scale-95 transition-all duration-300">
              Accept
            </button>
            <button className="p-2 bg-red-600 text-white rounded-md text-xs">
              Remove
            </button>
          </div>
        </Card>
      ),
      code: `<Card cn="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
          <div className="border-b border-neutral-600 pb-1">
            <h3 className="text-lg font-semibold">Interactive Cards</h3>
          </div>
          <div>
            <p className="text-sm">Buttons to show interactivity.</p>
          </div>
          <div className="flex gap-2 items-center">
            <button className="p-2 bg-green-600 text-white rounded-md text-xs active:scale-95 transition-all duration-300">
              Accept
            </button>
            <button className="p-2 bg-red-600 text-white rounded-md text-xs">
              Remove
            </button>
          </div>
        </Card>`,
    },
    {
      id: 6,
      title: "Card with Actions",
      description: "An interactive card with animated buttons.",
      component: (
        <Card cn="p-6 shadow-md bg-[#1e1e1e] rounded-xl flex flex-col gap-4 text-white transition-all duration-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-green-400">✔</span> Action Required
          </h3>
          <p className="text-sm text-neutral-300">Select an option below.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md text-xs transition-all duration-300 hover:scale-105 active:scale-95">
              Accept
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md text-xs transition-all duration-300 hover:scale-105 active:scale-95">
              Decline
            </button>
          </div>
        </Card>
      ),
      code: `<Card cn="p-6 shadow-md bg-[#1e1e1e] rounded-xl flex flex-col gap-4 text-white transition-all duration-300 hover:shadow-xl">
  <h3 className="text-lg font-semibold flex items-center gap-2">
    <span className="text-green-400">✔</span> Action Required
  </h3>
  <p className="text-sm text-neutral-300">Select an option below.</p>
  <div className="flex gap-3">
    <button className="px-4 py-2 bg-green-600 text-white rounded-md text-xs transition-all duration-300 hover:scale-105 active:scale-95">
      Accept
    </button>
    <button className="px-4 py-2 bg-red-600 text-white rounded-md text-xs transition-all duration-300 hover:scale-105 active:scale-95">
      Decline
    </button>
  </div>
</Card>`,
    },
    {
      id: 5,
      title: "Card with Badge",
      description: "A card featuring a floating badge with a hover effect.",
      component: (
        <Card cn="max-w-sm w-full mx-auto p-5 shadow-lg bg-[#2a2a2a] rounded-xl relative flex flex-col gap-4 text-white transition-all duration-300 hover:scale-100">
          <span className="absolute top-2 right-2 bg-blue-600 text-xs px-3 py-1 rounded-full shadow-md">
            New
          </span>
          <h3 className="text-lg font-semibold">Latest Update</h3>
          <p className="text-sm text-neutral-300">
            This card has a floating badge.
          </p>
        </Card>
      ),
      code: `<Card cn="max-w-sm w-full mx-auto p-5 shadow-lg bg-[#2a2a2a] rounded-xl relative flex flex-col gap-4 text-white transition-all duration-300 hover:scale-100">
  <span className="absolute top-2 right-2 bg-blue-600 text-xs px-3 py-1 rounded-full shadow-md">
    New
  </span>
  <h3 className="text-lg font-semibold">Latest Update</h3>
  <p className="text-sm text-neutral-300">
    This card has a floating badge that highlights important content.
  </p>
</Card>`,
    },
    {
      id: 7,
      title: "Minimal Profile Card",
      description:
        "A sleek and modern profile card with a soft gradient background.",
      component: (
        <Card cn="p-6 shadow-xl bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] rounded-xl flex flex-col items-center text-white transition-transform duration-300 hover:scale-[1.05]">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-md"
          />
          <h3 className="text-xl font-semibold mt-3">Sophia Lane</h3>
          <p className="text-sm text-neutral-300">Product Designer</p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm transition-all duration-300 hover:bg-purple-500 active:scale-95">
            Connect
          </button>
        </Card>
      ),
      code: `<Card cn="p-6 shadow-xl bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] rounded-xl flex flex-col items-center text-white transition-transform duration-300 hover:scale-[1.05]">
  <img
    src="https://randomuser.me/api/portraits/women/50.jpg"
    alt="User Avatar"
    className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-md"
  />
  <h3 className="text-xl font-semibold mt-3">Sophia Lane</h3>
  <p className="text-sm text-neutral-300">Product Designer</p>
  <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm transition-all duration-300 hover:bg-purple-500 active:scale-95">
    Connect
  </button>
</Card>`,
    },

    {
      id: 8,
      title: "Glassmorphism Profile Card",
      description:
        "A futuristic profile card with a glass-like effect and hover animation.",
      component: (
        <Card cn="p-6 shadow-lg bg-white/10 backdrop-blur-md rounded-xl flex flex-col items-center text-white border border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/60.jpg"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-cyan-400 shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-3">Alexander Woods</h3>
          <p className="text-sm text-neutral-300">Senior Software Engineer</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-cyan-400 text-sm hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 text-sm hover:underline">
              Portfolio
            </a>
          </div>
        </Card>
      ),
      code: `<Card cn="p-6 shadow-lg bg-white/10 backdrop-blur-md rounded-xl flex flex-col items-center text-white border border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
  <img
    src="https://randomuser.me/api/portraits/men/60.jpg"
    alt="User Avatar"
    className="w-20 h-20 rounded-full border-4 border-cyan-400 shadow-lg"
  />
  <h3 className="text-xl font-semibold mt-3">Alexander Woods</h3>
  <p className="text-sm text-neutral-300">Senior Software Engineer</p>
  <div className="flex gap-4 mt-3">
    <a href="#" className="text-cyan-400 text-sm hover:underline">LinkedIn</a>
    <a href="#" className="text-gray-300 text-sm hover:underline">Portfolio</a>
  </div>
</Card>`,
    },
    {
      id: 9,
      title: "Animated Profile Card",
      description:
        "A stylish card with an expanding hover effect and social icons.",
      component: (
        <Card cn="p-6 shadow-lg bg-[#121212] rounded-xl flex flex-col items-center text-white relative overflow-hidden transition-all duration-300 hover:bg-[#181818] group">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-green-500 shadow-md"
          />
          <h3 className="text-xl font-semibold mt-3">Daniel Reed</h3>
          <p className="text-sm text-neutral-400">Machine Learning Engineer</p>
          {/* Social Links Container */}
          <div className="absolute bottom-[-3rem] left-0 w-full flex justify-center py-3 bg-green-600 text-white text-sm font-medium transition-all duration-300 group-hover:bottom-0">
            Follow Me
          </div>
        </Card>
      ),
      code: `<Card cn="p-6 shadow-lg bg-[#121212] rounded-xl flex flex-col items-center text-white relative overflow-hidden transition-all duration-300 hover:bg-[#181818] group">
  <img
    src="https://randomuser.me/api/portraits/men/75.jpg"
    alt="User Avatar"
    className="w-20 h-20 rounded-full border-4 border-green-500 shadow-md"
  />
  <h3 className="text-xl font-semibold mt-3">Daniel Reed</h3>
  <p className="text-sm text-neutral-400">Machine Learning Engineer</p>
  {/* Social Links Container */}
  <div className="absolute bottom-[-3rem] left-0 w-full flex justify-center py-3 bg-green-600 text-white text-sm font-medium transition-all duration-300 group-hover:bottom-0">
    Follow Me
  </div>
</Card>`,
    },
    {
      id: 10,
      title: "Gradient Background Card",
      description:
        "A stylish card with a gradient background and hover animation.",
      component: (
        <Card cn="p-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl">
          <h3 className="text-lg font-semibold">Gradient Magic</h3>
          <p className="text-sm text-neutral-200">
            A vibrant card with smooth hover animation.
          </p>
        </Card>
      ),
      code: `<Card cn="p-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl">
  <h3 className="text-lg font-semibold">Gradient Magic</h3>
  <p className="text-sm text-neutral-200">
    A vibrant card with smooth hover animation.
  </p>
</Card>`,
    },
    {
      id: 11,
      title: "Card With Footer",
      description: "A card with a footer.",
      component: (
        <Card cn="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
          <h2 className="text-lg font-semibold">Card with Footer</h2>
          <p className="text-sm">This card has a footer section.</p>
          <div className="mt-4 border-t border-gray-600 pt-2 text-xs text-gray-300">
            Footer content here
          </div>
        </Card>
      ),
      code: `<Card cn="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 shadow-md bg-[#63636321] rounded-lg flex flex-col gap-4 text-white">
          <h2 className="text-lg font-semibold">Card with Footer</h2>
          <p className="text-sm">This card has a footer section.</p>
          <div className="mt-4 border-t border-gray-600 pt-2 text-xs text-gray-300">
            Footer content here
          </div>
        </Card>`,
    },
  ],
};
