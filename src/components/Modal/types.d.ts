interface AnnouncementState {
  announcement: string[] | null;
  error: boolean;
  errorMessage: string;
}

interface AnnouncementResponse {
  data: any;
  status: number;
}

export { AnnouncementState, AnnouncementResponse };
