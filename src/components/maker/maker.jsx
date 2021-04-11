import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
	const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id); 

	const onLogout = () => {
		authService.logout();
	};

  useEffect(() => {
    if (!userId) {
      return ;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      //1. component가 mount되면 cardRepository의 syncCards가 먼저 호출
      setCards(cards);
      //2. syncCards의 함수가 수행(여기서는 cardRepository의 ref.on)
      //3. 마지막 arrow함수인 ref.off() 리턴되어 stopSync에 할당(수행은 x)
      //4. return된 stopSync는 아래 return값이 되고 함수가 unmount되었을때 실행 => ref.off()가 실행
    })
    return () => stopSync();
    //useEffect에서 return 하게 되면 함수가 unmount되었을때 알아서 호출해준다 => 리소스나 메모리를 정리하는일을 해줄수 있다
    //useEffect의 return에서는 항상 function을 리턴해주어야 한다
  }, [userId, cardRepository])

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
        history.push('/');
      }
		});
	}, [userId, history, authService]);

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
    cardRepository.saveCard(userId, card);
	};

	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
    cardRepository.removeCard(userId, card);
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
          FileInput={FileInput}
					cards={cards}
					addCard={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
