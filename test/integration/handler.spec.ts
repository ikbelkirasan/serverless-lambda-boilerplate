import * as lambdaTester from 'lambda-tester'
import { hello } from '../../src/handler'

describe('handler', () => {
    it('should work', () => {
        const event = {
            foo: 'bar'
        }

        return lambdaTester(hello)
            .event(event)
            .expectResolve(result => {
                expect(result).toEqual(event)
            })
    })
})
