import AccordionConversation from '../../components/AccordionConversations';
import AccordionConversationsInformation from '../../components/AccordionConversationsInformation';

function ConversationActions() {
  return (
    <div>
      <div>
        <AccordionConversation title='Acciones de la conversación' />
      </div>
      <div className='mt-5'>
        <AccordionConversationsInformation title='Información de la conversación' />
      </div>
    </div>
  );
}
export default ConversationActions;
