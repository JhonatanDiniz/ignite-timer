import { HistoryContainer, HistoryList, Status } from './style'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="yellow">Em Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}