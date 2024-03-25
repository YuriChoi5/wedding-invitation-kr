import { useEffect } from 'react'

export default function KakaoShare() {
	useEffect(() => {
    kakaoButton()
  }, [])

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }

      kakao.Share.sendDefault({
        objectType: 'location',
        address: '경기 성남시 분당구 판교역로226번길 16',
        addressTitle: 'W스퀘어컨벤션',
        content: {
          title: '유리 ღ 디미트리 결혼합니다',
          description: '2024년 6월 1일 토요일, 오후 5시 30분\nW스퀘어컨벤션 L층 그레이스홀',
          imageUrl:
            './greeting.jpg',
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'https://yurichoi5.github.io/wedding-invitation-kr/',
            webUrl: 'https://yurichoi5.github.io/wedding-invitation-kr/',
          },
        },
        
        buttons: [
          {
            title: '모바일 청첩장 보기',
            link: {
              mobileWebUrl: 'https://yurichoi5.github.io/wedding-invitation-kr/',
              webUrl: 'https://yurichoi5.github.io/wedding-invitation-kr/',
            },
          },
        ],
      });
    }
  }
	
	return (
<></>	)
}