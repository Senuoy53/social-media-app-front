interface AnnouncementState {
  announcement: string[];
  error: boolean;
  errorMessage: string;
  loading: boolean;
}

interface AnnouncementResponse {
  data: any;
  status: number;
}

export { AnnouncementState, AnnouncementResponse };
