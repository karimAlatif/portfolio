export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  linkType: "video" | "live";
  color: string;
  mainImage: string;
  galleryImages: string[];
  videos: string[];
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const projects: Project[] = [
  {
    id: "shed-configurator-v2",
    title: "Shed Configurator-V2",
    description: `Shed Configurator is a real-time 3D web application that allows users to design and customize sheds interactively. Users can adjust dimensions, materials, and colors, with changes instantly reflected in 3D environment. Built with React and Babylon.js.`,
    longDescription:
      "A comprehensive tool that transforms 2D floorplans into fully interactive 3D models. Users can upload their floorplan, define rooms and spaces, then watch as the application generates a detailed 3D representation. Each floor supports interactive actions, allowing users to navigate, customize materials, and visualize their space in real-time.",
    tags: ["React", "Babylon.js", "WEBGPU"],
    link: "https://dashing-duckanoo-b51ade.netlify.app/",
    linkType: "live",
    color: "#22d3ee",
    mainImage: "/projects/Shed Configurator-V2/img0.png",
    galleryImages: [
      "/projects/Shed Configurator-V2/img1.png",
      "/projects/Shed Configurator-V2/img2.png",
      "/projects/Shed Configurator-V2/img3.png",
      "/projects/Shed Configurator-V2/img4.png",
      "/projects/Shed Configurator-V2/img5.png",
      "/projects/Shed Configurator-V2/img6.png",
      "/projects/Shed Configurator-V2/img7.png",
      "/projects/Shed Configurator-V2/img8.png",
      "/projects/Shed Configurator-V2/img9.png",
    ],
    videos: ["https://vimeo.com/1170122493?share=copy&fl=sv&fe=ci"],
  },
  {
    id: "farmverse",
    title: "FarmVerse 3D",
    description:
      "FarmVerse 3D is an interactive digital twin of a palm farm environment, featuring a smart inspection robot integrated as an IoT platform. The robot navigates the 3D farm, monitors each palm’s health, and streams real-time data for analysis and decision-making.",
    longDescription:
      `FarmVerse 3D is an interactive digital twin of a palm farm environment, featuring a smart inspection robot integrated as an IoT platform. The robot navigates the 3D farm, monitors each palm’s health, and streams real-time data for analysis and decision-making.
       Built as a real-time 3D web experience, the project combines environmental simulation, IoT integration, and intelligent monitoring to demonstrate how robotics and digital twins can optimize modern agriculture.`,
    tags: ["React", "Babylon.js", "WEBGPU"],
    link: "https://roomvisualization.netlify.app/",
    linkType: "live",
    color: "#59e0b0",
    mainImage: "/projects/FarmVerse 3D/img0.png",
    galleryImages: [
      "/projects/FarmVerse 3D/img1.png",
      "/projects/FarmVerse 3D/img2.png",
      "/projects/FarmVerse 3D/img3.png",
      "/projects/FarmVerse 3D/img4.png",
      "/projects/FarmVerse 3D/img5.png",
    ],
    videos: ["https://vimeo.com/1170122849?fl=pl&fe=sh"],
  },
  {
    id: "apartment-generator",
    title: "Apartment Generator",
    description:
      "Convert your 2D floorplan into a 3D model and integrate actions to each floor. Built with React.js, Fabric.js, and Babylon.js.",
    longDescription:
      "A comprehensive tool that transforms 2D floorplans into fully interactive 3D models. Users can upload their floorplan, define rooms and spaces, then watch as the application generates a detailed 3D representation. Each floor supports interactive actions, allowing users to navigate, customize materials, and visualize their space in real-time.",
    tags: ["React", "Babylon.js", "Fabric.js"],
    link: "https://bit.ly/3qrx7Ps",
    linkType: "video",
    color: "#3b82f6",
    mainImage: "/projects/Apartment Generator/img5.png",
    galleryImages: [
      "/projects/Apartment Generator/img1.png",
      "/projects/Apartment Generator/img2.png",
      "/projects/Apartment Generator/img3.png",
      "/projects/Apartment Generator/img4.png",
    ],
    videos: ["https://drive.google.com/file/d/1-RDLcDKLPKOFxdh0Z0snncGskvy9q-JH/view"],
  },
  {
    id: "shirt-configurator",
    title: "Shirt Configurator",
    description:
      "Design and customize each part of your shirt with a variety of options in a beautiful 3D interface.",
    longDescription:
      "An interactive 3D shirt configurator that allows users to design and customize every part of their shirt. Choose fabrics, colors, collar styles, cuff designs, and more — all rendered in real-time 3D. The intuitive interface makes it easy to visualize the final product before ordering.",
    tags: ["React", "Babylon.js"],
    link: "https://mellow-tapioca-d04416.netlify.app/",
    linkType: "live",
    color: "#22d3ee",
    mainImage: "/projects/3D Shirt Generator/main.jpg",
    galleryImages: [
      "/projects/3D Shirt Generator/img1.jpg",
      "/projects/3D Shirt Generator/img2.jpg",
      "/projects/3D Shirt Generator/img3.jpg",
    ],
    videos: [
      "https://vimeo.com/1171047842?fl=pl&fe=cm"
    ],
  },
  {
    id: "room-simulation",
    title: "Room Simulation",
    description:
      "VR app helping people create internal room designs interactively — passing through 2D, 3D, and Virtual Reality phases.",
    longDescription:
      "A groundbreaking VR application that guides users through three phases of room design: starting with a 2D floorplan, transitioning to a 3D model, and finally entering a fully immersive Virtual Reality experience. Users can place furniture, change materials, and walk through their designed spaces.",
    tags: ["Unity", "VR"],
    link: "http://bit.ly/RoomGradPro",
    linkType: "video",
    color: "#f43f5e",
    mainImage: "/projects/Room Simulation/img2.png",
    galleryImages: [
      "/projects/Room Simulation/img1.png",
      "/projects/Room Simulation/img3.png",
      "/projects/Room Simulation/img4.png",
      "/projects/Room Simulation/img5.png",
      "/projects/Room Simulation/img6.png",
    ],
    videos: ["https://drive.google.com/file/d/1pZwiR8Lqh-8FEo2yQtYxlvcoueP1TSz3/view?usp=sharing"],
  },
  {
    id: "smart-city",
    title: "Smart City",
    description:
      "Design your city from scratch and track it with IoT platform. Build roads, traffic systems, and buildings integrated with REST API & Socket.IO.",
    longDescription:
      "A smart city Simulation platform where users can design urban environments from scratch. Features include road networks, traffic management systems, building placement, and full IoT platform integration. Real-time data streams through REST API and Socket.IO connections provide live monitoring and control of city infrastructure.",
    tags: ["Unity", "IoT", "REST API"],
    link: "http://bit.ly/2KdUTNe",
    linkType: "video",
    color: "#f59e0b",
    mainImage: "/placeholder.svg",
    galleryImages: [],
    videos: [],
  },
  {
    id: "shed-configurator-v1",
    title: "Shed Configurator-V1",
    description:
      "Design your own shed matching your performance and aesthetic demands with real-time 3D visualization.",
    longDescription:
      "A powerful 3D shed configurator that enables users to design custom sheds tailored to their exact specifications. Choose dimensions, materials, roof styles, doors, windows, and finishes — all visualized in real-time 3D. The configurator ensures designs meet both aesthetic preferences and structural requirements.",
    tags: ["React", "Babylon.js"],
    link: "https://bit.ly/3Vb0HYg",
    linkType: "live",
    color: "#3b82f6",
    mainImage: "/projects/Shed Configurator-V1/img1.png",
    galleryImages: [
      "/projects/Shed Configurator-V1/img2.png",
      "/projects/Shed Configurator-V1/img3.png",
      "/projects/Shed Configurator-V1/img4.png",
      "/projects/Shed Configurator-V1/img5.png",
      "/projects/Shed Configurator-V1/img6.png",
    ],
    videos: ["https://drive.google.com/file/d/18pXkQnHbyDeK9lZF9xiBSf33QsTwd7I2/view?usp=sharing"],
  },
  {
    id: "3d-avatar",
    title: "3D Avatar",
    description:
      "Customize your own 3D Avatar with variety of options for each body part in an interactive configurator.",
    longDescription:
      "An interactive 3D avatar customization tool where users can personalize every body part. Select hairstyles, facial features, clothing, accessories, and more. Real-time 3D rendering ensures immediate visual feedback as users craft their unique digital identity.",
    tags: ["React", "Babylon.js"],
    link: "https://funny-fenglisu-5bf603.netlify.app/",
    linkType: "live",
    color: "#22d3ee",
    mainImage: "/projects/3D Avatar Project/main.jpg",
    galleryImages: [
      "/projects/3D Avatar Project/img2.jpg",
      "/projects/3D Avatar Project/img3.jpg",
      "/projects/3D Avatar Project/img4.png",
      "/projects/3D Avatar Project/img5.png",
    ],
    videos: ["/projects/3D Avatar Project/Recording.mp4"],
  },
  {
    id: "3d-museum",
    title: "3D Museum",
    description:
      "Immersive web representation of the Ottoman Empire using media, smooth transitions, and color animations.",
    longDescription:
      "An immersive digital museum experience showcasing the Ottoman Empire through rich media presentations, smooth camera transitions, and captivating color animations. Navigate through curated exhibits featuring historical artifacts, architectural marvels, and cultural narratives brought to life in 3D.",
    tags: ["Three.js", "GSAP"],
    link: "https://zen-raman-13cad3.netlify.app/",
    linkType: "live",
    color: "#f43f5e",
    mainImage: "/projects/3D Museum/img0.png",
    galleryImages: [
      "/projects/3D Museum/img1.png",
      "/projects/3D Museum/img2.png",
      "/projects/3D Museum/img3.png",
      "/projects/3D Museum/img4.png",
      "/projects/3D Museum/img5.png",
    ],
    videos: ["/projects/3D Museum/Recording.mp4"],
  },
  {
    id: "cart-configurator",
    title: "Cart Configurator",
    description:
      "Visualize and configure 3D hospital carts with interactive customization options.",
    longDescription:
      "A specialized 3D configurator for hospital cart systems. Healthcare professionals can visualize and customize cart configurations, selecting drawers, shelves, accessories, and color schemes. The real-time 3D rendering provides accurate previews of customized medical equipment.",
    tags: ["React", "Babylon.js"],
    link: "https://main--gallant-jones-0a57a8.netlify.app/",
    linkType: "live",
    color: "#f59e0b",
    mainImage: "/projects/Cart Configurator/img3.png",
    galleryImages: [
      "/projects/Cart Configurator/img1.png",
      "/projects/Cart Configurator/img2.png",
      "/projects/Cart Configurator/img4.png",
      "/projects/Cart Configurator/img5.png",
      "/projects/Cart Configurator/img6.png",
    ],
    videos: ["/projects/Cart Configurator/Recording.mp4"],
  },
  {
    id: "socks-configurator",
    title: "Socks Configurator",
    description:
      "3D socks visualization with fabric editing and real-time modification capabilities.",
    longDescription:
      "A creative 3D socks configurator featuring fabric editing tools and real-time modification. Design unique sock patterns, choose materials and colors, and see your custom creation rendered in stunning 3D. The fabric editor provides fine-grained control over patterns and textures.",
    tags: ["React", "Fabric.js", "Babylon.js"],
    link: "https://unique-crostata-7e0f78.netlify.app/en",
    linkType: "live",
    color: "#3b82f6",
    mainImage: "/projects/Socks Configurator/main.jpg",
    galleryImages: [
      "/projects/Socks Configurator/img1.jpg",
      "/projects/Socks Configurator/img2.jpg",
      "/projects/Socks Configurator/img3.jpg",
      "/projects/Socks Configurator/img4.jpg",
    ],
    videos: ["/projects/Socks Configurator/Recording.mp4"],
  },
  {
    id: "3d-avatar-configurator",
    title: "3D Avatar Configurator",
    description:
      "Advanced avatar customization with multiple body part options and real-time 3D preview.",
    longDescription:
      "An advanced avatar customization platform offering extensive body part options and real-time 3D preview. Users can fine-tune facial features, body proportions, outfits, and accessories with an intuitive interface. The system supports multiple styles and export functionality.",
    tags: ["React", "Babylon.js"],
    link: "https://main--boisterous-zabaione-55007d.netlify.app/",
    linkType: "live",
    color: "#22d3ee",
    mainImage: "/projects/3D Avatar Configurator/img1.png",
    galleryImages: [
      "/projects/3D Avatar Configurator/img2.png",
      "/projects/3D Avatar Configurator/img3.png",
      "/projects/3D Avatar Configurator/img4.png",
    ],
    videos: ["/projects/3D Avatar Configurator/Recording.mp4"],
  },
  {
    id: "interactive-room",
    title: "Interactive Room",
    description:
      "Navigate around a visualized room in a realistic way with full interactivity.",
    longDescription:
      "A realistic interactive room experience where users can freely navigate and explore a beautifully rendered 3D space. Features include object interaction, material customization, lighting control, and immersive first-person navigation. Perfect for architectural visualization and interior design.",
    tags: ["React", "Babylon.js"],
    link: "https://clever-joliot-d20ec1.netlify.app/?utm_source=interactiveRoom",
    linkType: "live",
    color: "#f43f5e",
    mainImage: "/projects/Interactive Room Project/image_original.jpg",
    galleryImages: [
      "/projects/Interactive Room Project/img2.jpg",
      "/projects/Interactive Room Project/img3.jpg",
      "/projects/Interactive Room Project/img4.jpg",
    ],
    videos: ["/projects/Interactive Room Project/Recording.mp4"],
  },
  {
    id: "3d-studio",
    title: "3D Studio",
    description:
      "Web app that loads 3D models and adds interactive actions — a browser-based 3D editor.",
    longDescription:
      "A browser-based 3D editor that empowers users to load, manipulate, and enhance 3D models directly in the web. Add interactive actions, animations, and behaviors to models. Features include a node-based editor, material system, lighting setup, and export capabilities.",
    tags: ["React", "Babylon.js"],
    link: "https://drive.google.com/file/d/1-0VglpObcUt01vUPPNTTV36ZW84ULPn5/view",
    linkType: "video",
    color: "#f59e0b",
    mainImage: "/projects/3D Studio/img0.png",
    galleryImages: [
      "/projects/3D Studio/img1.png",
      "/projects/3D Studio/img2.png",
      "/projects/3D Studio/img3.png",
    ],
    videos: ["/projects/3D Studio/3dStudio.mp4"],
  },
  {
    id: "car-configurator",
    title: "Car Configurator",
    description:
      "Visualize and explore a car in a realistic 3D web application.",
    longDescription:
      "A photorealistic 3D car configurator that lets users explore vehicles from every angle. Customize paint colors, wheel designs, interior materials, and trim packages. The high-fidelity rendering engine delivers near-photographic quality directly in the browser.",
    tags: ["React", "Babylon.js"],
    link: "https://modest-leavitt-9fa711.netlify.app/",
    linkType: "live",
    color: "#3b82f6",
    mainImage: "/projects/Car Configurator/img0.png",
    galleryImages: [
      "/projects/Car Configurator/img1.png",
      "/projects/Car Configurator/img2.png",
      "/projects/Car Configurator/img3.png",
      "/projects/Car Configurator/img4.png",
      "/projects/Car Configurator/img5.png",
      "/projects/Car Configurator/img6.png",
    ],
    videos: ["/projects/Car Configurator/Recording.mp4"],
  },
  {
    id: "art-gallery",
    title: "Art Gallery",
    description: "Immersive 3D art gallery experience in the browser.",
    longDescription:
      "An immersive virtual art gallery that transports visitors into a beautifully crafted 3D exhibition space. Navigate through curated rooms, view artwork up close, and experience art in a completely new dimension. The gallery features dynamic lighting and ambient audio.",
    tags: ["Three.js"],
    link: "https://quirky-mcnulty-f68aa7.netlify.app/",
    linkType: "live",
    color: "#22d3ee",
    mainImage: "/projects/Art Gallery/img0.png",
    galleryImages: [
      "/projects/Art Gallery/img1.png",
      "/projects/Art Gallery/img2.png",
      "/projects/Art Gallery/img3.png",
      "/projects/Art Gallery/img4.png",
      "/projects/Art Gallery/img5.png",
      "/projects/Art Gallery/img6.png",
      "/projects/Art Gallery/img7.png",
    ],
    videos: ["/projects/Art Gallery/Recording.mp4"],
  },
  {
    id: "cushion-configurator",
    title: "Cushion Configurator",
    description:
      "Configure cushions using morphing technology for real-time shape customization.",
    longDescription:
      "An innovative cushion configurator utilizing morphing technology for real-time shape customization. Users can adjust firmness, shape, size, and materials while watching the 3D model morph smoothly between configurations. The technology enables parametric design directly in the browser.",
    tags: ["React", "Babylon.js", "Morphing"],
    link: "https://vigilant-turing-59086a.netlify.app/",
    linkType: "live",
    color: "#f43f5e",
    mainImage: "/projects/Cushion Configurator/img4.png",
    galleryImages: [
      "/projects/Cushion Configurator/img0.png",
      "/projects/Cushion Configurator/img1.png",
      "/projects/Cushion Configurator/img2.png",
      "/projects/Cushion Configurator/img3.png",
      "/projects/Cushion Configurator/img5.png",
      "/projects/Cushion Configurator/img6.png",
    ],
    videos: ["/projects/Cushion Configurator/Recording.mp4"],
  },
  {
    id: "cesium-babylonjs-integration",
    title: "Cesium + Babylon.js Integration",
    description:
      "Integrating geospatial Cesium.js mapping with Babylon.js 3D rendering engine.",
    longDescription:
      "A pioneering integration of Cesium.js geospatial mapping with the Babylon.js 3D rendering engine. This project enables rendering complex 3D models on accurate geospatial terrain, combining the power of GIS data with high-quality 3D visualization for applications in urban planning, Simulation, and IoT monitoring.",
    tags: ["Cesium.js", "Babylon.js"],
    link: "https://drive.google.com/file/d/1IZKhaHfWhgzXN80pHVjdvJFUoU_ek9CT/view?usp=drivesdk",
    linkType: "video",
    color: "#f59e0b",
    mainImage: "/projects/Cesium Babylon.js Integration/img0.png",
    galleryImages: [
      "/projects/Cesium Babylon.js Integration/img1.png",
      "/projects/Cesium Babylon.js Integration/img2.png",
      "/projects/Cesium Babylon.js Integration/img3.png",
    ],
    videos: ["/projects/Cesium Babylon.js Integration/Recording.mp4"],
  },
  {
    id: "bts-simulation",
    title: "BTS Simulation",
    description:
      "Build and track real BTS stations in a 3D world using IoT platforms with REST API and Socket support.",
    longDescription:
      "A BTS (Base Transceiver Station) Simulation platform for building and monitoring telecommunications infrastructure in a 3D world. Integrated with IoT platforms via REST API and WebSocket for real-time tracking of station status, signal strength, and network coverage visualization.",
    tags: ["Unity", "IoT", "REST API"],
    link: "http://bit.ly/2YToAGy",
    linkType: "video",
    color: "#3b82f6",
    mainImage: "/projects/Bts-Simulation/img0.png",
    galleryImages: [
      "/projects/Bts-Simulation/img1.png",
      "/projects/Bts-Simulation/img2.png",
      "/projects/Bts-Simulation/img3.png",
      "/projects/Bts-Simulation/img4.png",
      "/projects/Bts-Simulation/img5.png",
    ],
    videos: ["/projects/Bts-Simulation/Bts-Simulation.mp4"],
  },
  {
    id: "elevator-simulation",
    title: "Elevator Simulation",
    description:
      "Design, build and customize elevators in 3D with real-time pricing and Firebase integration.",
    longDescription:
      "A comprehensive elevator design and Simulation tool with real-time 3D visualization. Users can configure cabin dimensions, door styles, interior finishes, and mechanical systems. Firebase integration provides real-time pricing updates, order management, and cloud storage for saved configurations.",
    tags: ["Unity", "Firebase"],
    link: "http://bit.ly/2YWkAF2",
    linkType: "video",
    color: "#22d3ee",
    mainImage: "/projects/Elevator Simulation/img1.png",
    galleryImages: [
      "/projects/Elevator Simulation/img0.png",
      "/projects/Elevator Simulation/img2.png",
      "/projects/Elevator Simulation/img3.png",
      "/projects/Elevator Simulation/img4.png",
      "/projects/Elevator Simulation/img5.png",
    ],
    videos: ["https://drive.google.com/file/d/1st3xLQSnrqtrUA37W4Cuz9H_sroEzPVu/preview"],
  },
];
