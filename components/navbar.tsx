import { UserButton } from "@clerk/nextjs";
import MobileSlidebar from "@/components/mobile-sidebar";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSlidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />

            </div>

        </div>
    );
}

export default Navbar;