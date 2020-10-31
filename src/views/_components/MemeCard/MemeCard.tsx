import React from "react";

import { MemeResume } from "../../../services/MemeResume";
import {
  InfoWrapper,
  MemeLink,
  Tag,
  TagsWrapper,
  UserAvatar,
  UserLink,
  UserName,
  MemeCardWrapper,
} from "./MemeCard.styles";

export const MemeCard: React.FC<{ meme: MemeResume }> = ({ meme }) => (
  <MemeCardWrapper data-testid="meme-item">
    <MemeLink>
      <img
        alt={meme.title}
        src={meme.images.small.url}
        style={{
          width: `${meme.images.small.width}px`,
          height: `${meme.images.small.height}px`,
        }}
      ></img>
    </MemeLink>

    <InfoWrapper>
      {console.log(meme.user)}

      {meme.user && (
        <UserLink
          data-testid="meme-user"
          href={meme.user.profileUrl}
          target="_blank"
          title={`Ver el perfil de ${meme.user.displayName}`}
        >
          <UserAvatar src={meme.user.avatarUrl} alt={meme.user.displayName} />
          <UserName>{meme.user.displayName}</UserName>
        </UserLink>
      )}

      {!meme.user && (
        <TagsWrapper>
          {meme.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsWrapper>
      )}
    </InfoWrapper>
  </MemeCardWrapper>
);
