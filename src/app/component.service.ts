import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  async getValueFromAttribute(attributeValue: string) {

    const propertyValue = JSON.parse(attributeValue)
    
    const value = await zySdk.services.dictionary.getValue(propertyValue)

    return value
  }
}