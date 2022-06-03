import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/layoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toastrPage()
        navigateTo.tooltipPage()
    })

    it.only(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'example')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selecrDatepickerWIthRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFistAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)
    
    })
})