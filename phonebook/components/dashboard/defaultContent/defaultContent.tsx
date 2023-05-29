/* #region  [- import -] */
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import { Col, Card } from 'antd';
import Styles from '../../../styles/components/dashboard/defaultContent/defaultContent.module.scss';
import { Users } from '../../../dtos/contactOutputDTO';
/* #endregion */
interface props {
  contactsList: Users[]
}
const DefaultContent = ({ contactsList }: props): JSX.Element => {

  /* #region  [- pieChartData -] */
  const pieChartData = [
    {
      x: 'Female',
      y: Number(((contactsList.filter((item: any) => item.gender === 'female').length / contactsList.length) * 100).toFixed(2))
    },
    {
      x: 'Male',
      y: Number(((contactsList.filter((item: any) => item.gender === 'male').length / contactsList.length) * 100).toFixed(2))
    },
  ];
  /* #endregion */

  /* #region  [- columnChartData -] */
  const columnChartData = [
    {
      x: '20',
      y: contactsList.filter((item: any) => item.age < 20).length,
    },
    {
      x: '30',
      y: contactsList.filter((item: any) => item.age >= 20 && item.age < 30).length,
    },
    {
      x: '40',
      y: contactsList.filter((item: any) => item.age >= 30 && item.age < 40).length,
    },
    {
      x: '50',
      y: contactsList.filter((item: any) => item.age >= 40 && item.age < 50).length,
    },
    {
      x: '100',
      y: contactsList.filter((item: any) => item.age >= 50).length,
    },

  ];
  /* #endregion */

  /* #region  [- return -] */
  return (
    <main className={Styles.main}>
      <Col className={Styles.pieChartCol} xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <section className={Styles.cardsSection}>
          <Card title="Total Contacts" className={Styles.totalContactsCard}>
            <p>{Object.keys(contactsList).length}</p>
          </Card>
          <Card title="Female Contacts" className={Styles.totalContactsCard}>
            <p>{Object.keys(contactsList.filter((item: any) => item.gender === 'female')).length}</p>
          </Card>
          <Card title="Male Contacts" className={Styles.totalContactsCard}>
            <p>{Object.keys(contactsList.filter((item: any) => item.gender === 'male')).length}</p>
          </Card>
        </section>
        <VictoryPie data={pieChartData} colorScale={["#eee359", "#ff6361"]} labelRadius={70} />

      </Col>
      <Col className={Styles.columnChartCol} xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <VictoryChart theme={VictoryTheme.grayscale} domainPadding={20} >
          <VictoryBar barWidth={30} style={{ data: { fill: "#c43a31" } }} data={columnChartData} />
        </VictoryChart>
        <Card title="Report Description" className={Styles.descriptionCard}>
          <p>Lorem ipsum dolor sit amet. Sed illo voluptatem rem ipsa excepturi aut amet fugit ut sint asperiores ut dolorem nisi ut reiciendis reiciendis quo porro earum. Et blanditiis assumenda et vitae accusantium sed dignissimos provident ut enim voluptatem et nulla numquam aut odio ducimus. Sed velit impedit et voluptate iure qui mollitia voluptas et ratione alias ut ducimus incidunt aut fuga nemo ea quod voluptatibus.</p>
        </Card>
      </Col>
    </main>
  );
  /* #endregion */

}
export default DefaultContent;