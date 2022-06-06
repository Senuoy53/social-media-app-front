interface AnnouncementState {
  announcement: string[];
  error: boolean;
  errorMessage: string;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  loadingMore: boolean;
  submitPostClicked: boolean;
}

interface AnnouncementResponse {
  data: any;
  status: number;
}

export { AnnouncementState, AnnouncementResponse };
