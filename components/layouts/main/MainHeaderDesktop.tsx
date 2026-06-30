import { Link, useRouter } from "expo-router";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useThemeStore } from "@/stores/theme/useThemeStore";
import { Pressable, ScrollView, View } from "react-native";
import { Category } from "@/types/category";
import { twMerge } from "tailwind-merge";
import { Ionicons } from "@expo/vector-icons";
import TextComponent from "@/components/common/text/TextComponent";
import { Role } from "@/types/user";
import Button from "@/components/common/button/Button";
import Dropdown from "@/components/common/dropdown/Dropdown";
import { MYPAGE_NAV_LIST } from "@/constants/menu";

interface Props {
    list: Category[];
}

function MainHeaderDesktop({ list }: Props) {
    const router = useRouter();
    const { theme, onChangeTheme } = useThemeStore();
    const { isLoggedIn, user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        // 각 웹브라우저에는 History가 있기 때문에 "뒤로가기" "앞으로가기"가 가능함
        // router.push() 메소드는 URL History에 추가하여 새로운 페이지로 이동
        // A페이지 -> B페이지로 push() 한다면 뒤로가기 시 A 페이지로 이동됨
        router.replace("/");
        // router.replace() 메소드는 URL History에 덮어쓰기 하며 새로운 페이지로 이동
        // (C페이지 ->) A페이지 -> B페이지로 replace() 한다면 뒤로가기 시 C 페이지로 이동
    };

    return (
        <View
            className={twMerge(
                ["bg-background-paper", "border-b", "border-divider"],
                ["w-full", "h-16", "justify-center", "z-50"],
            )}>
            <TextComponent>바꿨다</TextComponent>
        </View>
    );
}

export default MainHeaderDesktop;
