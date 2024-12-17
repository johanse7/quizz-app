import { DarkMode } from "./DarkMode";
import { QuizInfo } from "./QuizInfo";

export const Navbar = () => {
  return (
    <nav className="py-4 sm:py-10 lg:py-16">
      <div className="flex justify-between items-center">
        <QuizInfo />
        <div className="ml-auto">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};
