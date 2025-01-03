import React from 'react'
import PersonChat from 'components/chat/PersonChat';
import axiosInstance from 'utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import empty_back_img from '../assets/img/group/empty_back_img.svg'

const fetchChatRooms = async () => {
  const response = await axiosInstance.get('/chat/rooms');
  return response.data.data; // 명세서에 따르면 "data" 필드를 반환
};

const Chats: React.FC = () => {
  // react-query로 API 호출
  const { data: chatRooms, isLoading, error } = useQuery({
    queryKey: ['chatRooms'],
    queryFn: fetchChatRooms,
  });
  
  if (isLoading) return  null;
  if (error) return null;

  const isChatRoomsEmpty = !chatRooms || chatRooms.length === 0;

  return (
    <div className='container' id='chat'>
      <div className="page_title">채팅</div>
      {isChatRoomsEmpty ? (
        // chatRooms가 비어 있을 때 빈 화면 이미지 보여주기
        <div className="empty_chat">
          <img src={empty_back_img} alt="No chats available" />
          <p className="empty_text">아직 채팅방이 없어요.<br />이웃과 함께 따뜻한 대화를 시작해보세요!</p>
        </div>
      ) : (
        // chatRooms에 데이터가 있을 때 기존 UI
        <div className="person_chat">
          <div className="title">이웃 대화</div>
          {chatRooms.map((room: any) => (
            <PersonChat
              key={room.roomId}
              roomId={room.roomId}
              receiverName={room.receiverName}
              lastMessage={room.lastMessage}
              lastUpdated={room.lastUpdated}
              receiverUserType={room.receiverUserType}
              receiverId={room.receiverId}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Chats