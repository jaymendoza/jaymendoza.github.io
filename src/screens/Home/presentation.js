// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import moment from 'moment';
import Iframe from 'react-iframe';
import { Statistic } from 'semantic-ui-react';

// Local Components
import VotingButton from '../../components/Buttons/VotingButton';
import HomeTopContributors from '../../components/HomeTopContributors';
import {
	Row,
	Column,
	InfoContainer,
	Info,
	MetricContainer,
	Number,
	Metric,
	VoterButton
} from './components';

class HomePresentation extends Component {
	state = {
		months: null,
		monthsString: null,
		days: null,
		daysString: null
	}
	static propTypes = {
		contributions: PropTypes.number.isRequired,
		expenditures: PropTypes.number.isRequired,
		loans: PropTypes.number.isRequired,
		pledges: PropTypes.number.isRequired,
		credit: PropTypes.number.isRequired,
		council: PropTypes.number.isRequired,
		PACS: PropTypes.number.isRequired,
		individuals: PropTypes.number.isRequired,
		entities: PropTypes.number.isRequired,
	};

	componentDidMount() {
		this.getTime();
	}

	getTime() {
		let months;
		let monthsString;
		let daysString;
		const vote = moment('2019-11-05').diff(moment(), 'milliseconds');
		const duration = moment.duration(vote);
		if (duration._data.years > 0) {
			months = duration._data.years * 12 + duration._data.months;
			monthsString = "Months";
		} else if(duration._data.months === 1) {
			months = duration._data.months;
			monthsString = "Month";
		} else {
			months = duration._data.months;
			monthsString = "Months";
		}

		if (duration._data.days === 1) {
			daysString = "Day";
		} else {
			daysString = "Days";
		}

		this.setState({
			months,
			monthsString,
			days: duration._data.days,
			daysString
		});
	}

	render () {
		const {
			contributions,
			expenditures,
			// loans,
			// pledges,
			// credit,
			council,
			PACS,
			individuals,
			entities
		} = this.props;
		const {
			months,
			monthsString,
			days,
			daysString
		} = this.state;

		return (
			<>
				<Row>
					<Column>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={individuals}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>Individuals</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={entities}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>Entities</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						{/* <Number>
							<CountUp
								end={individuals}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Individuals
							</Metric>
						</Number>
						<Number>
							<CountUp
								end={entities}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Entities
							</Metric>
						</Number> */}
					</Column>
					<Column>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={council}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>Council</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={PACS}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>PACS</Statistic.Label>
							</Statistic>
						</Statistic.Group>
					</Column>
					<Column>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={expenditures}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>Expenditures</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>
									<CountUp
										end={contributions}
										delay={.3}
										duration={2.75}
									/>
								</Statistic.Value>
								<Statistic.Label>Contributions</Statistic.Label>
							</Statistic>
						</Statistic.Group>
					</Column>
				</Row>
				<Row>
					<Column>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>22</Statistic.Value>
								<Statistic.Label>Faves</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						<Statistic.Group>
							<Statistic>
								<Statistic.Value>22</Statistic.Value>
								<Statistic.Label>Faves</Statistic.Label>
							</Statistic>
						</Statistic.Group>
						{/* <InfoContainer>
							<Info>
								<HomeTopContributors />
							</Info>
						</InfoContainer> */}
					</Column>
					<Column>
						<div>
							<Statistic.Group>
								<Statistic>
									<Statistic.Value>{months}</Statistic.Value>
									<Statistic.Label>{monthsString}</Statistic.Label>
								</Statistic>
								<Statistic>
									<Statistic.Value>{days}</Statistic.Value>
									<Statistic.Label>{daysString}</Statistic.Label>
								</Statistic>
							</Statistic.Group>
							<br />
							until the next election.
						</div>
						<div>
							<VoterButton href="https://www.votetexas.gov/register-to-vote/">Registered to vote?</VoterButton>
						</div>
						<VotingButton name='kevin' />
					</Column>
					<Column>
						<InfoContainer class="standard">
							{/* Change the iframe to take up 100% with text out of frame */}
							<Iframe url="http://media.swagit.com/austintx/atxn1/"
								width="100%"
								height="100%"
								display="initial"
								position="relative"
								allowFullScreen
							/>
						</InfoContainer>
					</Column>
				</Row>
			</>
		);
	};
};

export default HomePresentation;
