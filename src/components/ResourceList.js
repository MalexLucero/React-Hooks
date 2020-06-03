import React from "react";
import { useResources } from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <table className="ui celled striped table">
      <thead>
        <tr>
          <th colSpan="3">{resource.toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource) => {
          return (
            <tr key={resource.title}>
              <td colSpan="3" className="collapsing">
                {resource.title}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResourceList;
