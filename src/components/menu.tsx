const Menu = (props: { weekend: boolean, loading: boolean, menu: string[]; }) => {
	return (
		<>
			{
				props.weekend ? (
					<>
						<h1>Nous sommes le week-end!</h1>
					</>
				) : (
					<>
						<h1>Au menu du jour:</h1>
						{
							props.loading ? <>Loading...</>
								: (
									<div className="flex-horizontal">
										<div>
											<h2>Menu fourchette verte</h2>
											{
												(() => {
													let result = props.menu[0]?.split("\n");
													let returnVal = result.map(v => {
														return <>{v}<br /></>;
													});
													console.dir(returnVal);
													return returnVal;
												})()
											}
										</div>
										<hr />
										<div>
											<h2>Menu Hit</h2>
											{
												(() => {
													let result = props.menu[1]?.split("\n");
													if (!result) {
														return <></>;
													}
													let returnVal = result.map(v => {
														return <>{v}<br /></>;
													});
													console.dir(returnVal);
													return returnVal;
												})()
											}
										</div>
									</div>
								)
						}
					</>
				)
			}
		</>
	);
};

export default Menu;
