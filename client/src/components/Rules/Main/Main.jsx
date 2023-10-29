import classes from './Main.module.css'

function Main({ scroll }) {
	return (
		<main
			className={scroll > 250 ? classes.main__page_fixed : classes.main__page}
		>
			<section className={classes.main__section}>
				<div className={classes.main__container}>
					<div className={classes.main__container}>
						<div className={classes.main__heading}>
							<h1 className={classes.main__heading_title}>
								Правила посещения компьютерного клуба Name
							</h1>
						</div>
					</div>

					<div className={classes.main__text}>
						<div className={classes.main__rules_pre}>
							Мы надеемся, что вы с пониманием отнесетесь ко всем Правилам
							нашего клуба. <br></br>
							Посещая наш клуб, вы автоматически соглашаетесь с Правилами клуба.
						</div>

						<ol>
							<li>
								Name – не просто компьютерный клуб, это настоящее комьюнити
								геймеров, где уважение и взаимопонимание – основополагающие
								вещи. Не допускается оскорбление и дискриминация
								других,&nbsp;нецензурная брань и агрессивное поведение.
							</li>
							<li>
								Мы выступаем против алкоголя, курения и других вредных привычек.
								Геймеры в нетрезвом состоянии, в состоянии наркотического
								опьянения, а также в грязной одежде, либо распространяющие запах
								не обслуживаются и удаляются из клуба.
							</li>
							<li>
								Не допускается использование вредоносного ПО, чит-кодов и
								мошеннических программ, способных причинить вред клубу и его
								посетителям.
							</li>
							<li>
								Запрещено мусорить в компьютерном клубе и на прилегающей к нему
								территории.
							</li>
							<li>
								Администратор обязан оказывать помощь клиенту в случае
								возникновения технических проблем. Администратор не обязан
								обучать клиента работе с компьютером, а также работе с
								конкретными программами и играми.
							</li>
							<li>
								Администрация Клуба не несет ответственности за сохранность
								Ваших вещей, поэтому будьте внимательны и не оставляйте их без
								присмотра!
							</li>
							<li>
								Так же в клубе запрещено:
								<ul>
									<li>
										* качаться с усилием на кресле, кататься на кресле по
										территории игрового зала;&nbsp;
									</li>
									<li>
										* употреблять в пищу сухарики, чипсы и другие рассыпчатые
										продукты в игровой зоне;
									</li>
									<li>
										* спать или находиться в компьютерном зале клуба, не оплатив
										рабочее время за компьютером;
									</li>
									<li>* курить сигареты и IQOS (айкос) на территории клуба;</li>
									<li>
										* находиться в помещении клуба в состоянии алкогольного или
										наркотического опьянения;
									</li>
									<li>* употреблять нецензурные выражения в клубе;</li>
									<li>* мусорить в клубе и на прилегающей территоррии;</li>
									<li>
										* проявлять неуважение к персоналу или посетителям клуба;
									</li>
									<li>
										* наносить материальный ущерб клубу (включая умышленное
										повреждение программного обеспечения);
									</li>
									<li>
										* самостоятельно передвигать монитор, системный блок,
										разъединять составные части компьютера и сети, прикасаться к
										элементам электросети, питающие компьютеры и сетевые
										устройства;
									</li>
									<li>
										* запрещается находиться в клубе без оплаты игрового
										времени, а также создавать помехи и неудобства другим
										геймерам.
									</li>
								</ul>
							</li>
							<li>
								Если в результате действий геймера клуб понес материальный
								ущерб, необходимо полностью компенсировать этот ущерб:
								<ul>
									<li>Телевизор - 30000 рублей;</li>
									<li>Стол игровой - 5000 рублей;</li>
									<li>Кресло - 22000 рублей;</li>
									<li>Наушники - 5000 рублей;</li>
									<li>Монитор - 18 000 рублей;</li>
									<li>Мышь - 3000 рублей;</li>
									<li>Клавиатура - 6000 рублей;</li>
									<li>
										Терминал пополнения средств - от 15000 до 100000 рублей;
									</li>
									<li>Игровой коврик - 1000 рублей.</li>
									<li>
										*Стоимость иного оборудования, не указанного в п.8 настоящих
										правил, можно уточнить у администрации.
									</li>
								</ul>
							</li>
							<li>
								Администрация клуба имеет право удалить геймера из клуба без
								возврата денег при нарушении правил.
							</li>
							<li>
								{' '}
								Компьютерный клуб "Name" является частным заведением, поэтому
								администрация вправе отказать в посещении клуба любому клиенту
								без объяснения причин отказа;
							</li>
							<li>
								Посетитель имеет право получить информацию о занятости
								компьютеров в зале и о перспективах их освобождения.
							</li>
							<li>
								Посетитель имеет право в случае неисправности оборудования
								требовать от администратора технической помощи, либо замены
								компьютера на&nbsp; исправный.
							</li>
						</ol>

						<p align='center' className={classes.rules__first_p}>
							Для длительного и плодотворного сотрудничества просим вас
							соблюдать данные правила клуба Cyberloga.
						</p>

						<p align='center'>Благодарим за понимание.</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main
