import NotificationMessage from '../../src/components/NotificationMessage'
import { mount } from '@vue/test-utils'

it('does not throw console error when info type', () => {
  const spy = jest.spyOn(console, 'error')

  mount(NotificationMessage, {
    propsData: {
      type: 'info',
      message: 'I like turtles'
    }
  })

  expect(spy).not.toHaveBeenCalledWith(expect.stringContaining('[Vue warn]: Invalid prop: custom validator check failed for prop "type".'))
})

it('passes with info type', () => {
  const wrapper = mount(NotificationMessage, {
    propsData: {
      message: 'I like turtles!'
    }
  })
  // Extract the validator
  const validator = wrapper.vm.$options.props.type.validator
  // invoke the validator
  expect(validator('info')).toBe(true)
})

it('it accepts valid type props', () => {
  const validTypes = ['info', 'error', 'success']
  const validator = NotificationMessage.props.type.validator
  validTypes.forEach((valid) => expect(validator(valid)).toBe(true))
  expect(validator('invalid')).toBe(false)
})