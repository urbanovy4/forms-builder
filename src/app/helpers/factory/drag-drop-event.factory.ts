import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

export interface ContainerModel<T> {
  id: number,
  data: T[],
  index: number
}

export class DragDropEventFactory<T> {

  public createInContainerEvent(containerId: number, data: T[], fromIndex: number, toIndex: number): CdkDragDrop<any[]> {
    const event = this.createEvent(fromIndex, toIndex);
    const container: any = {id: containerId, data: data};
    event.container = <CdkDropList<T[]>>container;
    event.previousContainer = event.container;
    event.item = <CdkDrag<T>>{data: data[fromIndex]};
    return event;
  }

  public createCrossContainerEvent(from: ContainerModel<T>, to: ContainerModel<T>): CdkDragDrop<any[]> {
    const event = this.createEvent(from.index, to.index);
    event.container = this.createContainer(to);
    event.previousContainer = this.createContainer(from);
    event.item = <CdkDrag<T>>{data: from.data[from.index]};
    return event;
  }

  private createEvent(previousIndex: number, currentIndex: number): CdkDragDrop<T[], T[]> {
    return {
      previousIndex: previousIndex,
      currentIndex: currentIndex,
      item: undefined,
      container: undefined,
      previousContainer: undefined,
      isPointerOverContainer: true,
      distance: {x: 0, y: 0},
      dropPoint: {x: 0, y: 0}
    };
  }

  private createContainer(model: ContainerModel<T>): CdkDropList<T[]> {
    const container: any = {id: model.id, data: model.data};
    return <CdkDropList<T[]>>container;
  }

}
