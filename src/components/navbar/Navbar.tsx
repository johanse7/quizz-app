import { DarkMode } from "./DarkMode";
import { LanguageMenu } from "./LanguageMenu";
import { QuizInfo } from "./QuizInfo";
import { ShareButton } from "./ShareButton";

export const Navbar = () => {
  return (
    <nav className="py-10 lg:py-16">
      <div className="flex justify-between items-center">
        <QuizInfo />
        <div className="flex gap-2 ml-auto">
          <ShareButton />
          <LanguageMenu />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};
