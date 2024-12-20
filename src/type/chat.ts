export interface PersonChatProps {
    roomId: string;
    receiverName: string;
    lastMessage: string;
    lastUpdated: string;
    receiverUserType: string;
    receiverId:number;
  }

export interface RequestFinalProps {
    location: string;
    time: string;
    work: string;
    onClose: () => void;
    onSubmit: () => void;
    onEdit: () => void;
}

export interface RequestWorkFinalProps {
    location: string;
    time: string;
    work: string;
    payment: string;
    onClose: () => void;
    onSubmit: () => void;
    onEdit: () => void;
}