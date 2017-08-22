import { TestBed } from '@angular/core/testing';

import { NameService } from './name.service';

describe('NameService', () => {
    let service: NameService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NameService]
        });
        service = TestBed.get(NameService);
    });

    it('should exists', () => {
        expect(service).toBeDefined();
    });

    test('should have a name getter', () => {
        expect(service.name).toBe('Nilesh');
    });

    test('#setName should have set the private name', () => {
        service.setName('Sachin');
        expect(service.name).toBe('Sachin');
    });
});
