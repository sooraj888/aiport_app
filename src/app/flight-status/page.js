import "@/styles/global.module.scss";
import ContainerPage from "@/components/ContainerPage";
import { headerMainRef } from "@/components/sideBar/SideMenu";

import styles from "@/styles/global.module.scss";

export default function page() {
  return (
    <div className={`${styles.pageWithPadding}`}>
      <ContainerPage>
        <div className={`col-12 ${styles.screen}`} style={{ paddingTop: 20 }}>
          <span
            className="btn btn-primary"
            style={{ marginRight: 20, minWidth: 120 }}
          >
            Arrival
          </span>
          <span className="btn btn-primary" style={{ minWidth: 120 }}>
            Departure
          </span>
        </div>
        <div
          className={`table-responsive ${styles.screen}`}
          style={{ paddingTop: 20 }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Airlines</th>
                <th>Flight</th>
                <th>Origin</th>
                <th>Scheduled Time </th>
                <th>Estimated Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContainerPage>
    </div>
  );
}
