import Image from "next/image";

interface HeroProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string; 
    resume: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Typography & Action Buttons */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">
            Welcome to my profile
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Hi, I&apos;m <span className="text-blue-600">{profile.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6">
            {profile.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            {profile.bio}
          </p>

          {/* Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              Download Resume
            </a>
          </div>

          {/*Social Links */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 dark:opacity-10" />

            <div className="relative w-52 h-52 sm:w-72 sm:h-72">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                className="rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}