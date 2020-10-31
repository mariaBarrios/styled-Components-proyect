import React from "react";

import { MemeResume } from "../../services/MemeResume";
import { MemeCard } from "../_components/MemeCard/MemeCard";

import { FiTrendingUp } from "react-icons/fi";
import { MemesListWrapper, Text, MemesListTitle } from "./MemeList.styles";
import { colors } from "../../ui/theme/theme";
import {} from "../_components/MemeCard/MemeCard.styles";

export const MemeList: React.FC<{ memes: MemeResume[] }> = ({ memes }) => {
  return (
    <>
      <MemesListTitle>
        <FiTrendingUp color={colors.lightBlue} />
        <Text>Los Guifs más trending del momento</Text>
      </MemesListTitle>

      <MemesListWrapper>
        {memes.map((meme) => {
          return <MemeCard key={meme.id} meme={meme} />;
        })}
      </MemesListWrapper>
    </>
  );
};
