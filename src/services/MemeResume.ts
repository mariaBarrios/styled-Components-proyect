export interface MemeResume {
  id: string
  title: string
  images: {
    small: {
      width: string
      height: string
      url: string
    }
  }
  user?: {
    avatarUrl: string
    displayName: string
    profileUrl: string
  }
  tags: string[]
}
