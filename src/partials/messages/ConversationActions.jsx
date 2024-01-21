import AccordionConversation from '../../components/AccordionConversations';
import AccordionConversationsInformation from '../../components/AccordionConversationsInformation';
import AccordionNotes from '../../components/AccordionNotes';

function ConversationActions() {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <AccordionConversation title='Acciones de la conversación' />
      </div>
      <div>
        <AccordionConversationsInformation title='Información de la conversación' />
      </div>
      <div>
        <AccordionNotes title='Notas' />
      </div>
    </div>
  );
}
export default ConversationActions;
