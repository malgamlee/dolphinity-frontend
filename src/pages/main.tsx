import Clock from "components/Clock";
import KakaoMap from "components/KakaoMap";
import Header from "layout/Header";
import PageLayout from "layout/PageLayout";
import SubHeader from "layout/SubHeader";
import { IconPin } from "@tabler/icons";
import FloatingButton from "components/FloatingButton";
import { useState, useMemo } from "react";
import styled from "@emotion/styled";
import { Drawer } from "@mantine/core";
import Register from "components/Register";
import { GiDolphin, GiSpermWhale } from "react-icons/gi";
import { useRouter } from "next/router";

const EditDrawer = styled(Drawer)`
  .mantine-Drawer-root {
    position: relative;
  }
  .mantine-Drawer-drawer {
    background-color: ${({ theme }) => theme.colors.deepBlue[0]};
    border-radius: 32px 32px 0 0;
    height: 640px;
  }
`;

const Main = () => {
  const [drawOpen, setDrawOpen] = useState(false);
  const router = useRouter();
  const actions = useMemo(
    () => [
      { label: "등록하기", icon: <IconPin />, onClick: () => setDrawOpen((prev) => !prev) },
      { label: "남방큰돌고래란?", icon: <GiDolphin />, onClick: () => router.push("/dolphin") },
      { label: "돌고래 보는방법", icon: <GiSpermWhale />, onClick: () => router.push("/watch") },
    ],
    [router]
  );
  return (
    <PageLayout noPadding>
      <Header noPadding={false} />
      <SubHeader />
      <Clock />
      <div style={{ width: "500px", height: "600px", position: "relative" }}>
        <KakaoMap latitude={33.450701} longitude={126.570667} />
      </div>
      {!drawOpen && <FloatingButton actions={actions} />}
      <EditDrawer position="bottom" opened={drawOpen} onClose={() => setDrawOpen(false)}>
        <Register />
      </EditDrawer>
    </PageLayout>
  );
};
export default Main;
