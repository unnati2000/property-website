import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStyles from "./ArrangeImages.styles";

const ArrangeImages = ({ images, setImages }) => {
  const classes = useStyles();
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
  }
  return (
    <div>
      <div className="my-6">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="thumbnails" direction="horizontal">
            {(provided) => (
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {images.map((image, index) => (
                  <Draggable
                    key={image.path}
                    draggableId={image.path}
                    index={index}
                  >
                    {(provided) => (
                      <img
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        src={URL.createObjectURL(image)}
                        className={classes.image}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ArrangeImages;
