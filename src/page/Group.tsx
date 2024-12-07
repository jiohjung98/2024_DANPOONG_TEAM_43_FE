import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import group_icon from '../assets/img/group/group_popup_icon.svg'
import MyGroupMain from 'components/group/MyGroupMain';
import OtherGroup from 'components/group/OtherGroup';

const Group = () => {
  const location = useLocation(); // 현재 위치 가져오기
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'mygroup' | 'other'>('mygroup');
  const [groupId, setGroupId] = useState<number>(0); // groupId 저장

  return (
    <div className='container' id='group'>
      <div className="page_title_div">
        <div className={`${activeTab === 'mygroup' ? 'active' : 'no'} cursor-pointer`}
          onClick={() => setActiveTab('mygroup')}>내 모임</div>
        <div className={`${activeTab === 'other' ? 'active' : 'no'} cursor-pointer`}
          onClick={() => setActiveTab('other')}>이웃 모임 둘러보기</div>
      </div>
      {/* 탭에 따라 다른 컴포넌트 렌더링 */}
      {activeTab === 'mygroup' && <MyGroupMain key={location.key} pagegroupId={groupId} />}
      {activeTab === 'other' && <OtherGroup />}
      
    </div>
  )
}

export default Group