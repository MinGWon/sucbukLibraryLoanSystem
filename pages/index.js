import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'

export default function Home() {

  const reallyLoan = () => {
    Swal.fire({
      title: '정말 쉴꺼임?',
      text: 'ㄹㅇ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 저는 휴식이 필요해요',
      cancelButtonText: '아니요, 좀만 더 참아볼께요',
    }).then((result) => {
      if(result.value) {
        Swal.fire(
            '대출했어요!',
            '선택하신 책이 대출되었습니다.',
            'success'
        )
      }
    })
  }

  return (
    <div className={styles.container}>
      <button className="stopwatchButton" onClick={reallyLoan}>대출하기</button>
    </div>
  )
}
