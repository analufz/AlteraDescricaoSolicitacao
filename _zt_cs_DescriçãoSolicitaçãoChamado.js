/**
* @NApiVersion 2.0
* @NScriptType ClientScript
* @NModuleScope SameAccount
*/
define(['N/record', 'N/runtime'],
/**
* @param {record}  record
* @param {runtime} runtime
*/
function(record, runtime) {
    
    /**
    * Function to be executed after page is initialized.
    * @param {Object} scriptContext
    * @param {Record} scriptContext.currentRecord - Current form record
    * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
    * @since 2015.2
    */

    function pageInit(scriptContext) {
        var chamados = scriptContext.currentRecord;
        alert('AQUIPAGEINIT');

        chamados.setValue('custeventdessolticket', 
            'Para que possamos agilizar o atendimento de seu chamado, por favor:\n1. Descreva a solicitação ou o problema que deseja reportar:\n2. Transação url\n3. Procedimento executado no momento do erro')
    }

    /**
    * Function to be executed when field is changed.
    * @param {Object} scriptContext
    * @param {Record} scriptContext.currentRecord - Current form record
    * @param {string} scriptContext.sublistId - Sublist name
    * @param {string} scriptContext.fieldId - Field name
    * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
    * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
    * @since 2015.2
    */

    function fieldChanged(scriptContext) {
        var chamados = scriptContext.currentRecord;
        var tipoDaSolicitacao = chamados.getValue({fieldId: 'custeventcusteventsoltipticket'});
        alert('AQUI');

        if (tipoDaSolicitacao === 5) { // Usuário - Criação
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, preencha as informações obrigatórias para criação do usuário:\n➜ Nome: \n➜ Email: \n➜ Cargo: \n➜ Supervisor: \n➜ Gerente: \n➜ Diretor: \n➜ Aprovador de despesas: \n➜ Aprovador de compra: \n➜ Departamento alocação: \n➜ Telefone: \n➜ Subsidiária: \n➜ CPF: ',
                ignoreFieldChange: true
            });
        } 
        if (tipoDaSolicitacao == 17) { // BS - Criação
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. Link BS exemplo: \n2. Informações que a busca deve trazer: \n3. Outras preferências: ',
                ignoreFieldChange: true
            });
        }
        if (tipoDaSolicitacao == 20) { // BS - Alteração
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. Link BS: \n2. Alterações desejadas: ',
                ignoreFieldChange: true
            });
        }
        if (tipoDaSolicitacao == 22) { // Usuário - Atualização
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. Nome do usuário: \n2. Atualizações: ',
                ignoreFieldChange: true
            });
        }
        if (tipoDaSolicitacao == 6) { // Usuário - Liberação de acesso
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. Nome do usuário: \n2. Acesso necessário: ',
                ignoreFieldChange: true
            });
        }
        if (tipoDaSolicitacao == 21) { // Usuário - Inativação
            chamados.setValue({
                fieldId: 'custeventdessolticket', 
                value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. Nome do usuário: ',
                ignoreFieldChange: true
            });
        } else {
            chamados.setValue({
            fieldId: 'custeventdessolticket', 
            value: 'Para que possamos agilizar o atendimento de seu chamado, por favor, informe:\n1. A solicitação ou o problema que deseja reportar: \n2. Transação url: \n3. Procedimento executado no momento do erro: ',
            ignoreFieldChange: true
            });
        }

    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged,
        // postSourcing: postSourcing,
        // sublistChanged: sublistChanged,
        // lineInit: lineInit,
        // validateField: validateField,
        // validateLine: validateLine,
        // validateInsert: validateInsert,
        // validateDelete: validateDelete,
        // saveRecord: saveRecord
    };
    
});
