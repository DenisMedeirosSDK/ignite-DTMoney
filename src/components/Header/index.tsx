import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { Container, HeaderContent, NewTransactionButton } from './styles'

const logoSvg = new URL('../../assets/Logo.svg', import.meta.url).href

export function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src={logoSvg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </Container>
  )
}
